import React, { PureComponent } from 'react';

class Radio extends PureComponent {
  // renderOptions = () => {
  //   console.log('[Radio.jsx] renderOptions()...');
  //   const { options } = this.props;
  //   const menu = options.map((option) => (
  //     <input
  //       type="radio"
  //       value={this.props.value}
  //       name={name}
  //       onChange={changed}
  //     />
  //   ));
  //   return menu;
  // }

  render() {
    const {
      options,
      name,
      changed,
      title,
      value,
      label,
    } = this.props;
    console.log('[Radio.jsx] rendering...');
    return (
      (
        <div>
          {`${title} : `}
          {options.map((item) => (
            <div key={item.id}>
              <input
                type="radio"
                value={item.value}
                name={item.value}
                onChange={changed}
              />
              <label htmlFor={name}>{item.label}</label>
            </div>


          ))}
          <br />
        </div>
      )
    );
  }
}

export default Radio;
