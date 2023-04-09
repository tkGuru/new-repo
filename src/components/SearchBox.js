import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(query ? `/search/?query=${query}` : '/search');
    };

    return (
<form class="container-fluid" onSubmit={submitHandler}>
    <div class="input-group">
      <button class="input-group-text" id="basic-addon1" type="submit">Search</button>
      <input type="text" class="form-control"  onChange={(e) => setQuery(e.target.value)} placeholder="search products..." aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  </form>
    );
}


