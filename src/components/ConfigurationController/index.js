// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div>
          <h1>Layout</h1>
          <div>
            <input
              id="content"
              checked={showContent}
              type="checkbox"
              onChange={onChangeContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div>
            <input
              id="leftNavbar"
              checked={showLeftNavbar}
              type="checkbox"
              onChange={onChangeLeftNavbar}
            />
            <label htmlFor="leftNavbar">Left Navbar</label>
          </div>
          <div>
            <input
              id="rightNavbar"
              checked={showRightNavbar}
              type="checkbox"
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="rightNavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
