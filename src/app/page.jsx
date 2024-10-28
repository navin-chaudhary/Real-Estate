import Hero from './components/Homepage'
import FeaturedListings from './components/FeaturedListings'
export default function Home() {
  const features = [
    {
      title: "50K+",
      description: "Active Listings.",
      bgColor: "bg-blue-100 dark:bg-blue-900",
    },
    {
      title: "100K+",
      description: "Happy Customers",
      bgColor: "bg-green-100 dark:bg-green-900",
    },
    {
      title: "1000+",
      description: "Expert Agents",
      bgColor: "bg-purple-100 dark:bg-purple-900",
    },
    {
      title: "100+",
      description: "Cities Covered",
      bgColor: "bg-orange-100 dark:bg-orange-900",
    },
  ];

  return (
    <div>
      <Hero />
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
                  rounded-xl p-6 
                  ${feature.bgColor}
                `}
              >
                <div className="flex flex-col sm:flex-row lg:flex-col items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-4">
                  <div className="text-center sm:text-left lg:text-center">
                    <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        <div className='bg-white dark:bg-gray-900'>
        <FeaturedListings />
        </div>
    </div>
  )
}