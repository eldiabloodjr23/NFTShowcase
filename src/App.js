
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Moderní Nft Market ve vašich rukou. Začnětě prodávat & růst "
        description="Kupujte, Ukládejte, Sbírejte NFTS  & vydělávejte crypto.  Platformu ProNef využívá  25+ milionů uživatelů. Přidej se i ty ještě dnes."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="ProNef je vytvořen pomocí Expo, které běží nativně na zařízeních všech uživatelů. Svou aplikaci můžete snadno dostat do rukou lidí"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title=" Kreativní cesta jak ukázat svůj obchod"
        description="Aplikace obsahuje dvě obrazovky. První obrazovka obsahuje seznam všech NFT, zatímco druhá zobrazuje podrobnosti o konkrétním NFT." 
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">weinvent</span>
        </p>
      </div>
    </>
  );
}

export default App;