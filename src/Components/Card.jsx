function Card({ title, description }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6 md:max-w-md">
        <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 md:text-lg">{description}</p>
      </div>
    );
}

export default Card;