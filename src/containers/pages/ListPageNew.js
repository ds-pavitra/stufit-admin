import React, { useState } from 'react';
import {
  Row,
  Button,
  // UncontrolledDropdown,
  // DropdownMenu,
  // DropdownItem,
  // DropdownToggle,
  Collapse,
} from 'reactstrap';
import { injectIntl } from 'react-intl';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import Breadcrumb from '../navs/Breadcrumb';

const ListPageNew = ({
  // intl,
  match,
  // onSearchKey,
  toggleModal,
  heading,
  title,
}) => {
  const [displayOptionsIsOpen, setDisplayOptionsIsOpen] = useState(false);
  const getUserRole = () => {
    const userCurrentRole = JSON.parse(
      localStorage.getItem('stufit_current_user')
    );
    const userRole = userCurrentRole.uid.user_role;
    return userRole;
  };

  const userRole = getUserRole();
  // const { messages } = intl;

  return (
    <Row>
      <Colxx xxs="12">
        <div className="mb-2">
          <h1>
            <IntlMessages id={heading} />
          </h1>

          <div className="text-zero top-right-button-container">
            {userRole === 'Super Admin' && (
              <Button
                color="primary"
                size="lg"
                className="top-right-button"
                onClick={() => toggleModal()}
              >
                New {title}
              </Button>
            )}
          </div>
          <Breadcrumb match={match} />
        </div>

        <div className="mb-2">
          <Button
            color="empty"
            className="pt-0 pl-0 d-inline-block d-md-none"
            onClick={() => setDisplayOptionsIsOpen(!displayOptionsIsOpen)}
          >
            <IntlMessages id="pages.display-options" />{' '}
            <i className="simple-icon-arrow-down align-middle" />
          </Button>
          <Collapse
            isOpen={displayOptionsIsOpen}
            className="d-md-block"
            id="displayOptions"
          >
            {/* <div className="d-block d-md-inline-block pt-1">
              <div className="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                <input
                  type="text"
                  name="keyword"
                  id="search"
                  placeholder={messages['menu.search']}
                  onKeyPress={(e) => onSearchKey(e)}
                />
              </div>
            </div> */}
          </Collapse>
        </div>
        <Separator className="mb-5" />
      </Colxx>
    </Row>
  );
};

export default injectIntl(ListPageNew);
