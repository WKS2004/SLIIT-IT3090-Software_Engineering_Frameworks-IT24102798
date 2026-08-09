import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import DishCard from '../components/DishCard';

export default function DishDetailPage() {
    const { data: dishes, isLoading, error } = useFetch("/menu.json");
    const { id } = useParams();

    if (isLoading) return (<p>Loading Dish...</p>);
    if (error) return (<p>Could not load Dish: { error }</p>);

    const dish = dishes.find((d) => d.id === Number(id));

    if (!dish) return (<><br /><p>Dish Not Found!</p></>);

    return (
        <div>
            <br />
            <p>Showing Details for Dish #{ id }</p>
            <br />
            <DishCard dish={dish} showLink={false} />
            <br />
            <Link to="/">← Back to menu</Link>
        </div>
    );
}