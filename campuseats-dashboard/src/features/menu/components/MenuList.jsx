import DishCard from "./DishCard";

export default function MenuList({ dishes }) {
    if (!dishes.length) return <p>No dishes match your search.</p>;
    return (
        <div>
            {dishes.map( (dish) => (
                <DishCard key={dish.id} dish={dish} />
            ))}
        </div>
    );
}