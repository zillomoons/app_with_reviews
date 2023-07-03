import React from 'react';
import { Watch } from './Watch';
import { i18n } from 'i18next';

const lngs: { [key: string]: { nativeName: string } } = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Русский' },
};

type Props = {
  i18n: i18n;
};

export class Header extends React.Component<Props> {
  render(): React.ReactNode {
    const { i18n } = this.props;
    return (
      <header>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj8Ls_fG5zLEYD6nDpJpo4Zsg25KLeBaPrQ&usqp=CAU'
          alt=''
        />
        <Watch />
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </header>
    );
  }
}
