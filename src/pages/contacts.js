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
    <strong>{this.state.LANGUAGE.t('Impressum')}</strong>
  </p>
  <p>
    {this.state.LANGUAGE.t('Angaben gemäß § 5 TMG')}
    <br />
    Tetiana Muchychka
    <br />
    Ruhrtalstr. 8
    <br />
    45239 Essen
  </p>

  <p>
    {this.state.LANGUAGE.t('Kontakt')}
    <br />
    Telefon: +49 15165800795
    <br />
    <a href="mailto:tetianamuchychka@gmail.com" target="_blank">
      tetianamuchychka@gmail.com
    </a>
  </p>

  <p>
    {this.state.LANGUAGE.t('Redaktionell verantwortlich')}
    <br />
    Tetiana Muchychka
  </p>

  <p>
    {this.state.LANGUAGE.t('EU-Streitschlichtung')}
    <br />
    {this.state.LANGUAGE.t('Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:')}
    <a href="https://ec.europa.eu/consumers/odr/" target="_blank">
      https://ec.europa.eu/consumers/odr/
    </a>
    . {this.state.LANGUAGE.t('Unsere E-Mail-Adresse finden Sie oben im Impressum.')}
  </p>

  <p>
    {this.state.LANGUAGE.t('Verbraucher­streit­beilegung/Universal­schlichtungs­stelle')}
    <br />
    {this.state.LANGUAGE.t('Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.')}
  </p>

  <p>
    <strong>{this.state.LANGUAGE.t('Haftung für Inhalte')}</strong>
    <br />
    {this.state.LANGUAGE.t('Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.')}
    <br />
    {this.state.LANGUAGE.t('Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.')}
  </p>

  <p>
    <strong>{this.state.LANGUAGE.t('Haftung für Links')}</strong>
    <br />
    {this.state.LANGUAGE.t('Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.')}
    <br />
    {this.state.LANGUAGE.t('Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.')}
  </p>

  <p>
    <strong>{this.state.LANGUAGE.t('Urheberrecht')}</strong>
    <br />
    {this.state.LANGUAGE.t('Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.')}
    <br />
    {this.state.LANGUAGE.t('Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.')}
  </p>

  <p>
    <strong>{this.state.LANGUAGE.t('Bildernachweis')}</strong>
    <br />
    {this.state.LANGUAGE.t('Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.')}
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

