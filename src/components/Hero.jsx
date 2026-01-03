export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center py-16">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Teen Businesses, <br />
          <span className="text-pink-400">One Cute Marketplace</span> 💕
        </h1>

        <p className="mt-4 text-gray-600">
          Support creative teens by shopping aesthetic handmade products near
          you.
        </p>

        <button className="mt-6 bg-pink-400 text-white px-6 py-3 rounded-full">
          Explore Now
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f
"
        className="rounded-3xl shadow-lg"
      />
    </section>
  );
}
