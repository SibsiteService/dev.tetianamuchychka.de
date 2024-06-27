import React from "react";
import { Helmet } from "react-helmet";
import Querystring from "querystring";

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"

import Layout from "../components/Layout";

import "../assets/css/contacts.css"

export default class contactsPage extends React.Component
{
    state = {}

    constructor(props)
    {
      super(props);
  
      this.state = 
      {
        LANGUAGE: new Language(),
      };

      this.toggleLanguage = (lang) =>
      {
        this.context.setLang(lang);
  
        this.setState(state => ({
          LANGUAGE:this.context
        }));
      }

      this.toggleLanguage =  this.toggleLanguage.bind(this);

      let langURL = Querystring.parse(this.props.location.search)['?lang'];
      this.state.LANGUAGE.setLang(langURL);
    }

    render(){
        return( 
        <LanguageContext.Provider value={this.state.LANGUAGE}>
          <Layout toggleLanguage ={this.toggleLanguage}>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Tetiana Muchychka - Kontakt und Impressum</title>
              <meta name="description" content="Für weitere Informationen und Konzertanfragen wenden Sie sich bitte an Tetiana Muchychka"/>
              <meta name="keywords" content="Tetiana Muchychka,Akkordeonistin,Best of NRW,Kontakt,Konzertanfrage,Telefonnummer Tetiana Muchychka"></meta>            
            </Helmet>
            <div className="flex-column contacts-section">
              <div className="background-underlay"/>
                <span className="section-title contacts-title">{this.state.LANGUAGE.t('Impressum')}</span>
                <div className= "flex-row flex-sa contacts-container">
                   <div className="contacts-text">
                      <p>
    {this.state.LANGUAGE.t('Für weitere Informationen und Konzertanfragen wenden Sie sich bitte an:')}
    <br />
    {this.state.LANGUAGE.t('Tetiana Muchychka')}
  </p>

  <p>
    <a href="mailto:tetianamuchychka@gmail.com" target="_blank">
      {this.state.LANGUAGE.t('tetianamuchychka@gmail.com')}
    </a>
  </p>

  <p>
    <strong>{this.state.LANGUAGE.t('Impressum')}</strong>
    <br />
    {this.state.LANGUAGE.t('Angaben gemäß § 5 TMG:')}
    <br />
    {this.state.LANGUAGE.t('Tetiana Muchychka')}
    <br />
    {this.state.LANGUAGE.t('Ihre Straße und Hausnummer')}
    <br />
    {this.state.LANGUAGE.t('PLZ')} {this.state.LANGUAGE.t('Ihr Ort')}
    <br />
    {this.state.LANGUAGE.t('Deutschland')}
  </p>

  <p>
    {this.state.LANGUAGE.t('Kontakt:')}
    <br />
    {this.state.LANGUAGE.t('Telefon: Ihre Telefonnummer')}
    <br />
    <a href="mailto:tetianamuchychka@gmail.com" target="_blank">
      {this.state.LANGUAGE.t('tetianamuchychka@gmail.com')}
    </a>
  </p>

  <p>
    {this.state.LANGUAGE.t('Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:')}
    <br />
    {this.state.LANGUAGE.t('Tetiana Muchychka')}
    <br />
    {this.state.LANGUAGE.t('Ihre Straße und Hausnummer')}
    <br />
    {this.state.LANGUAGE.t('PLZ')} {this.state.LANGUAGE.t('Ihr Ort')}
    <br />
    {this.state.LANGUAGE.t('Deutschland')}
  </p>
                    </div>

                   
                </div>
                
                <div className= "contacts-img tetiana-contacts-img"/>
                
                </div>
                
          </Layout>
        </LanguageContext.Provider> 
        );
    }
}

contactsPage.contextType = LanguageContext;

