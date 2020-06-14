const path = require( 'path' );
const merge = require( 'webpack-merge' );
const commonConfig = require( './webpack.config.common.js' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' );

const productionConfig = merge( commonConfig, {
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.(c|sa|sc)ss$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        //new UglifyJSPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: true,
                        }
                    },
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: (loader) => [
                                require( 'autoprefixer' ),
                                require( 'css-mqpacker' ),
                                require( 'cssnano' ),
                            ]
                        }
                    }
                ],
            }
        ]
    }
} );

module.exports = productionConfig;