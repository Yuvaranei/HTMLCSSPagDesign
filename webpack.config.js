module.exports = {
    entry : './src/index.js',
    output : {
        path : __dirname,
        filename : 'htmlcsspagedesign.js'
    },
    devServer : {
        inline : true,
        host : '0.0.0.0'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modues/,
                loader : 'babel-loader',
                query : {
                    presets : ['es2015','react']
                }
            },
            {
                test : /\.css|scss$/,
                loader : 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.jpe?g|png|gif|svg|woff|ttf|eot$/,
                loader:  ['url-loader']
            }
        ]
    }
}