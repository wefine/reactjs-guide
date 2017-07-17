// 组件创建方式第二种： ES6语法
class IngredientsList extends React.Component {
    renderListItem(ingredient, i) {
        return React.createElement("li", {key: i}, ingredient)
    }

    render() {
        return React.createElement("ul", {className: "ingredients"},
            this.props.items.map(this.renderListItem)
        )
    }
}

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