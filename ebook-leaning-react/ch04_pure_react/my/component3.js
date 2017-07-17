// 组件创建方式第二种： Stateless Functional Components
const IngredientsList = ({items}) =>
    React.createElement("ul", {className: "ingredients"},
        items.map((ingredient, i) =>
            React.createElement("li", {key: i}, ingredient)
        )
    );

const items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
];

ReactDOM.render(
    React.createElement(IngredientsList, {items}, null),
    document.getElementById('react-container')
);