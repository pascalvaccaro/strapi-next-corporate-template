import React, { useCallback, useState } from 'react';
import { join } from 'path';
import { Button, Modal, ModalHeader, ModalForm, ModalBody, ModalSection, InputTextWithErrors, InputPasswordWithErrors } from 'strapi-helper-plugin';
import styled from 'styled-components';

const NavTopRightWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  z-index: 1050;
  align-items: baseline;
`;

const DeploymentModal = ({ isOpen, close }) => {
  const [repository, setRepository] = useState(GITHUB_REPOSITORY);
  const [token, setToken] = useState(GITHUB_ACCESS_TOKEN);

  const hookUrl = useMemo(new URL(join('/repos', repository, 'dispatches'), 'https://api.github.com').toString(), [repository])

  const onConfirm = useCallback(
    () => fetch(hookUrl, {
      method: 'POST',
      body: JSON.stringify({ event_type: "build_from_strapi" }),
      headers: {
        Accept: 'application/vnd.github.v3+json',
        "Content-Type": "application/json",
        Authorization: `token ${token}`,
      },
    })
    .then(() => strapi.notification.success("deploy.success.message"))
    .catch(err => strapi.notification.error(err.message))
    .finally(close),
  [hookUrl, token, close]);

  return (
    <ModalForm>
      <Modal isOpen={isOpen} onToggle={close}>
        <ModalHeader headerBreadcrumbs={["deploy.modal.header.title"]} />
        <ModalBody>
          <InputTextWithErrors label={{id: "deploy.modal.repository.label"}}
            name="repository" value={repository} onChange={e => setRepository(e.target.value)}
            placeholder="deploy.modal.repository.placeholder"
            inputDescription={getUrl()} disabled={!!GITHUB_REPOSITORY}
          />
          <InputPasswordWithErrors label={{id: "deploy.modal.token.label"}}
            name="token" value={token} onChange={e => setToken(e.target.value)}
            placeholder="deploy.modal.token.placeholder"
          />
        </ModalBody>
        <ModalSection justifyContent="center">
          <Button primary onClick={onConfirm} style={{margin: 16}} label="deploy.modal.footer.confirm" />
        </ModalSection>
      </Modal>
    </ModalForm>
  )
};

const NavTopRight = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), [isOpen]);

  return (
    <NavTopRightWrapper>
      {NODE_ENV === 'production' && (
        <>
          <DeploymentModal isOpen={isOpen} close={() => setIsOpen(false)} />
          <Button key="deploy" primary onClick={openModal} label="deploy.button.label"  />
        </>
      )}
      {children}
    </NavTopRightWrapper>
  )
};

export default NavTopRight;
