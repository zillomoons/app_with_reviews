import React from 'react';
import { LangProps } from './Header';
import { i18n } from 'i18next';
import { IoMdArrowDropdown } from 'react-icons/io';

interface IProps {
  langOptions: LangProps;
  i18n: i18n;
  toggleDropDown: () => void;
  showDropDown: boolean;
}

export class DropDown extends React.Component<IProps> {
  changeLanguage(lng: string) {
    this.props.i18n.changeLanguage(lng);
    this.props.toggleDropDown();
  }
  render(): React.ReactNode {
    const { i18n, showDropDown, langOptions, toggleDropDown } = this.props;
    const currentLang = i18n.language;
    return (
      <div className='dropdown-container'>
        <button className='dropdown-button' onClick={() => toggleDropDown()}>
          <IoMdArrowDropdown />
          <span>{currentLang}</span>
        </button>
        {showDropDown && (
          <div className='lang-dropdown'>
            <ul>
              {Object.keys(langOptions).map((lng) => (
                <li key={lng} onClick={() => this.changeLanguage(lng)}>
                  <button disabled={currentLang === lng}>
                    {langOptions[lng].nativeName}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
