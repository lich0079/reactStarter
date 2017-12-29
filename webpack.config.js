var webpack = require('webpack');

module.exports = {
    entry : [ './src/index.js' ],
    output : {
        path : __dirname,
        filename : 'bundle.js'
    },
    plugins : [ 
        new webpack.DefinePlugin({
            'process.env' : {
                'NODE_ENV' : JSON.stringify('production')
            }
        }) 
    ],
    module : {
        loaders : [ {
            exclude : /node_modules/,
            loader : 'babel',
            query : {
                presets : [ 'react', 'es2015', 'stage-1' ]
            }
        } ]
    },
    resolve : {
        extensions : [ '', '.js', '.jsx' ]
    },
    devServer : {
        historyApiFallback : true,
        contentBase : './'
    }
};
