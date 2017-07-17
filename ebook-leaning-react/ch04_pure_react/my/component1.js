const items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
];

// 使用元素创建方式
function useElementCreated() {
    // 组件创建方式第一种： React.createClass
    const IngredientsList = React.createClass({
        displayName: "IngredientsList",
        renderListItem(ingredient, i) {
            return React.createElement("li", {key: i}, ingredient)
        },
        render() {
            return React.createElement("ul", {className: "ingredients"},
                this.props.items.map(this.renderListItem)
            )
        }
    });

    ReactDOM.render(
        React.createElement(IngredientsList, {items}, null),
        document.getElementById('react-container')
    );
}

// 使用工厂方法
function useFactory() {
    let list = React.DOM.ul(
        {className: "ingredients"},
        items.map((ingredient, key) =>
            React.DOM.li({key}, ingredient)
        )
    );

    ReactDOM.render(
        list,
        document.getElementById('react-container')
    );
}
