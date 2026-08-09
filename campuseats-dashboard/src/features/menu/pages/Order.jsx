import { useState } from "react";

export default function OrderPage() {
    const [form, setForm] = useState({ name: "", email: "", qty: 1 });
    const [errors, setErrors] = useState({});
    const [done, setDone] = useState(false);

    function validate(v) {
        const e = {};
        if (v.name.trim().length < 2) e.name = "Name Too Short!";
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) e.email = "Enter a Valid Email!";
        if (Number(v.qty) < 1) e.qty = "Quantity must be ≥ 1";
        return e;
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const found = validate(form);
        setErrors(found);
        if (Object.keys(found).length === 0) setDone(true);
    }

    if (done) return <p>Thanks, {form.name}! Order Received!</p>;

    return (
        <form onSubmit={handleSubmit}>
            <br/>
            <label for="name">Name: </label><br/>
            <input id="name" name="name" value={form.name} onChange={handleChange} />
            {errors.name && <span>{errors.name}</span>}<br/><br/>
            <label for="email">Email: </label><br/>
            <input id="email" name="email" value={form.email} onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}<br/><br/>
            <label for="qty">Quantity: </label><br/>
            <input id="qty" name="qty" type="number" value={form.qty} onChange={handleChange} />
            {errors.qty && <span>{errors.qty}</span>}<br/><br/>
            <button type="submit">Place Order</button>
        </form>
    );
}