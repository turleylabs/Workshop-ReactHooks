import React, { useState, useEffect } from 'react';

export function FavoriteAnimal() {
    const name = "";
    const animal = "";

    return (
        <form>
            <div>
                <label htmlFor="name">Name: </label>
                <input id="name" value={name} onChange={(e) => {}} />
            </div>
            <div>
                <label htmlFor="animal">Favorite Animal: </label>
                <input
                    id="animal"
                    value={animal}
                    onChange={(e) => {}}
                />
            </div>
            <div>Hi {name}, your favorite animal is a {animal}</div>
        </form>
    );
}