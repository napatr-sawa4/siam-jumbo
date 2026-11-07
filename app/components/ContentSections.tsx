import Image from "next/image";

export default function ContentSections() {
  return (
    <div className="bg-white">
      {/* Features Section */}
      <section id="products" className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-siamjumbo-gold">SIAMJUMBO</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the perfect harmony of taste, quality, and nutrition in
              every crispy bite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-100">
              <div className="w-16 h-16 bg-linear-to-r from-amber-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Carefully selected fruits processed with advanced technology to
                preserve natural flavors and nutrients.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-100">
              <div className="w-16 h-16 bg-linear-to-r from-amber-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                100% Natural
              </h3>
              <p className="text-gray-600">
                No artificial preservatives, colors, or flavors. Just pure,
                natural fruit goodness in every package.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-100">
              <div className="w-16 h-16 bg-linear-to-r from-amber-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Loved by Families
              </h3>
              <p className="text-gray-600">
                Perfect for all ages, our crispy fruits are a healthy and
                delicious snack that everyone enjoys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Discover Our{" "}
                <span className="text-siamjumbo-gold">Signature</span>{" "}
                Collection
              </h2>
              <div className="mb-6">
                <h3 className="font-playfair text-2xl font-bold text-siamjumbo-red mb-2">
                  100% REAL FRUIT
                </h3>
                <h4 className="font-playfair text-xl font-semibold text-siamjumbo-gold mb-4">
                  CRUNCH YOU HEAR
                </h4>
              </div>
              <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the authentic taste of Thailand with our premium
                crispy mango. Made from the finest mangosteen and mango,
                vacuum-fried to perfection for that satisfying crunch you can
                actually hear!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-siamjumbo-gold rounded-full mr-4"></div>
                  <span className="font-inter text-gray-700">
                    Premium Mangosteen & Mango blend
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-siamjumbo-gold rounded-full mr-4"></div>
                  <span className="font-inter text-gray-700">
                    100% real fruit - no artificial flavors
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-siamjumbo-gold rounded-full mr-4"></div>
                  <span className="font-inter text-gray-700">
                    Vacuum-fried for perfect crispiness
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-siamjumbo-gold rounded-full mr-4"></div>
                  <span className="font-inter text-gray-700">
                    Satisfying crunch you can hear
                  </span>
                </div>
              </div>

              <button className="font-inter bg-linear-to-r from-amber-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Order Now
              </button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Floating mango pieces animation */}
                <div className="absolute -top-10 -left-10 w-16 h-16 bg-yellow-200 rounded-full opacity-70 animate-bounce"></div>
                <div className="absolute -top-5 -right-5 w-12 h-12 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-10 h-10 bg-yellow-300 rounded-full opacity-50 animate-bounce delay-300"></div>

                {/* Main product image */}
                <div className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-yellow-50 rounded-3xl p-8 shadow-2xl overflow-hidden">
                  <div className="text-center">
                    <div className="relative mx-auto mb-6">
                      <Image
                        src="/recommend.png"
                        alt="SIAMJUMBO Crispy Fruit - Mangosteen & Mango"
                        width={320}
                        height={320}
                        className="mx-auto object-contain drop-shadow-2xl"
                        priority
                      />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                      SIAMJUMBO Crispy Fruit
                    </h3>
                    <p className="font-inter text-lg font-semibold text-siamjumbo-red mb-2">
                      Mangosteen & Mango
                    </p>
                    <p className="font-inter text-gray-600 mb-4">
                      Premium vacuum-fried tropical fruit
                    </p>
                    <div className="flex justify-center items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="font-inter text-sm text-gray-500">
                      Thailand's #1 Premium Crispy Fruit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="about" className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-siamjumbo-gold">Products</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Premium quality food exports from Thailand, bringing you the
              finest selection of vegetables, fruits, and rice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Vegetables
              </h3>
              <p className="text-gray-600">
                Be sure that our top-graded vegetables bring the best flavor
                when they are cooked.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fruits
              </h3>
              <p className="text-gray-600">
                We provide many kinds of tropical fruits. Freshly delivered from
                farm to our customers.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                New Product Thai Jasmine Rice
              </h3>
              <p className="text-gray-600">
                Premium Thai Jasmine rice - aromatic, fluffy, and perfect for
                any meal. Experience the authentic taste of Thailand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
