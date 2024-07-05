import Nav from "./Components/Nav";
import {
  Hero,
  CostomerReviews,
  Footer,
  PopularProducts,
  Servises,
  SpecialOffers,
  SuperQuilty,
  Subscribe
} from "./sections";


const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l  wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuilty />
    </section>
    <section className="padding-x py-10">
      <Servises />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CostomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className=" bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
