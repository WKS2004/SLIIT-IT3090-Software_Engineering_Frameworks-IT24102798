import { NavLink } from "react-router-dom";

export default function DishCard({ dish, showLink = true }) {
    return (
        <div>
            {showLink ? (
                <NavLink to={`/dish/${dish.id}`}>
                    <h3>{dish.name}</h3>
                </NavLink>
            ) : (
                <h3>{dish.name}</h3>
            )}
            <p>Rs. {dish.price.toFixed(2)}</p>
            <small>{dish.category}</small>
            {!dish.available && <span> — Sold out</span>}
        </div>
    );
}