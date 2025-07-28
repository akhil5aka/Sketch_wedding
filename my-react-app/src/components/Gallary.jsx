const items = [
  { img:'story1.jpg', title:'Sruthy & Rahul' },
  { img:'story2.jpg', title:'Arya & Vishnu' },
  // Add more
]

export default function Gallery(){
  return (
    <section className="py-16 bg-gray-50">
      <h3 className="text-3xl font-semibold text-center mb-8">Stories from Pepper Green</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {items.map(item => (
          <div key={item.title} className="group relative h-72 bg-center bg-cover rounded-lg"
               style={{ backgroundImage:`url('/${item.img}')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 group-hover:bg-opacity-60 transition">
              <h4 className="text-white text-xl">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
