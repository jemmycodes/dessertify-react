function Hero() {
  return (
    <section className="my-7 md:flex md:gap-10">
      <div className="md:w-3/5">
        <p className="text-4xl md:text-6xl mb-4 md:text-left font-black text-center">
          The Safest Online Food Ordering in
          <span className="text-orange"> Nigeria</span>
        </p>
        <p className="text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam
          delectus sed, vel quaerat, libero nesciunt debitis, architecto
          repudiandae accusamus aut exercitationem nisi non doloribus!
          Temporibus officia architecto reiciendis blanditiis.
        </p>
        <div className="flex w-full mt-5">
          <button className="w-full md:w-fit text-white font-bold bg-orange py-3 px-7  rounded-lg">
            Order now
          </button>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Hero;
