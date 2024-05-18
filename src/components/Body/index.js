// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div>
          {showContent ? (
            <div>
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}
          {showLeftNavbar ? (
            <div>
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet, djhgkjl ajhfkjf jdjskfk sklfklfj
                ariaunf
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div>
              <h1>Right Navbar</h1>
              <div>
                <p>Ad 1</p>
                <p>Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
