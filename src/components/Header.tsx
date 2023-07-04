import React from 'react';
import { Watch } from './Watch';
import { i18n } from 'i18next';
import { DropDown } from './DropDown';

export type LangProps = { [key: string]: { nativeName: string } };

const lngs: LangProps = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Русский' },
};

type Props = {
  i18n: i18n;
};

export class Header extends React.Component<Props> {
  state = {
    showDropDown: false,
  };
  toggleDropDown() {
    this.setState({
      showDropDown: !this.state.showDropDown,
    });
  }

  render(): React.ReactNode {
    const { i18n } = this.props;
    return (
      <header>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj8Ls_fG5zLEYD6nDpJpo4Zsg25KLeBaPrQ&usqp=CAU'
          alt='grogu'
        />
        <Watch />
        <DropDown
          langOptions={lngs}
          i18n={i18n}
          showDropDown={this.state.showDropDown}
          toggleDropDown={this.toggleDropDown.bind(this)}
        />
      </header>
    );
  }
}
