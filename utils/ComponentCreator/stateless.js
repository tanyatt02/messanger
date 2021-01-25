const fs = require('fs');
const path = require('path');

module.exports = componentName => {
    const content = `
        import './style.css';
        import React, { Fragment } from 'react';

        export default props => {
            //let { some } = props;

            return (
                <Fragment>
                    <div className="${componentName}"></div>
                </Fragment>
            )
        }
    `

    fs.writeFileSync(
        path.resolve(__dirname, '..', '..', 'src', 'components', componentName, `${componentName}.jsx`),
        content
    )
}