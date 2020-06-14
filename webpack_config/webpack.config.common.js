const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
//const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const config = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve( __dirname, '../build' ),
    },
    context: path.resolve( __dirname, '../src' ),

    plugins: [
    /*
        new CopyWebpackPlugin( [
            {
                from: '../src/assets/images', to: '../build/assets/images'
            },
            {
                from: '../src/assets/fonts', to: '../build/assets/fonts'
            },
            ] ),
*/

        new HtmlWebpackPlugin( {
            template: 'index.html',
            meta: {
                viewport: 'width=device-width, initial-scale=1',
            }
        } )
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',

                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images',
                            publicPath: 'assets/images',
                        }


                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',

                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts',
                            publicPath: 'assets/fonts',
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;