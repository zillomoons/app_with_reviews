import React, { ReactNode } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { WithTranslation, withTranslation } from 'react-i18next';

interface IProps extends WithTranslation {
  prop: any;
}
interface IState {
  state: any;
}

class App extends React.Component<IProps, IState> {
  render(): ReactNode {
    const { t, i18n } = this.props;
    return (
      <>
        <Header i18n={i18n} />
        <Main title={t('reviews')} i18n={i18n} />
        {i18n.language}
      </>
    );
  }
}

export default withTranslation()(App);
