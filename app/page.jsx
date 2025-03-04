import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover Greatness
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI Powered Stock Advice</span>
    </h1>
    <p className='desc text-center'>
      ZetaFinInsight is an open-source AI Financial Advice System for Stock trading to stay Ahead of the Market with Timely Financial Advice
    </p>

    <Feed />
  </section>
);

export default Home;
