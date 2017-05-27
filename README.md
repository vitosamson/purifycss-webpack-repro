This is a minimial reproducible case of the purifycss-webpack plugin dropping styles from async split bundles.

To run:

`yarn install`

`yarn build`

`yarn start` (assumes `python3` is installed)

Two css bundles will be produced: `build/notSplit/bundle.css` and `build/split/bundle.css`. You'll notice from the webpack output that they have different file sizes - the `split` bundle is about 3kb smaller than the `notSplit` bundle, even though they both use the same `Child` component.

One of the css rules that seems to get dropped is `.Select-arrow-zone`.
