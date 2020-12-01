function imprimaQuadradoAsterisco(n) {
    for(var i = 0; i <= n; i++) {
        var asteriscos = "";
        for(var y = 0; y < n; y++) {
            asteriscos += "*";
        }
        console.log(asteriscos);
    }
}
imprimaQuadradoAsterisco(5);