import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const headerContainerClassString: string = 'flex-1 flex-col flex-none w-full bg-gray-200 text-3xl font-extrabold text-left pt-10 pb-12 pl-4 text-gray-800'

const Header: FunctionComponent<Props> = (props) => {

  return (
      <header data-testid="header" className="w-full">
          <div className={headerContainerClassString}>
              <h1>
                  Trevor McDougald
              </h1>
          </div>

      </header>
  );
};

export default Header;
