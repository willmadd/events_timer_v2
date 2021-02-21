import React from 'react';
import './staticPage.scss';

export function staticPage(OriginalReactComponent) {
    return class extends React.Component {
        render() {
          return <div className="static__page">
              <div className="static__page__wrapper">

              <OriginalReactComponent {...this.props} />
              </div>

          </div>
       }
    }
 }