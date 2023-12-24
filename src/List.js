import React from "react";

const List = (props) => {
    return (
        <>
            {props.people.map((person) => {
                const { name, id, img, age } = person;
                return (
                    <article key={id} className="person">
                        <img src={img} alt={name} />
                        <div className="">
                            <h4>{name}</h4>
                            <p>{age}</p>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default List;
