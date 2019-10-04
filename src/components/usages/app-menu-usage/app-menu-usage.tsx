import {Component, h} from "@stencil/core";

@Component({
  tag: 'app-menu-usage',
  styleUrl: '../general-css/general-css.css',
  shadow: true,
})
export class AppMenuUsage {

  render() {
    return (

      <div class="card">
        <h5 class="card-header">app-menu</h5>
        <div class="card-body">


          <div class="card">
            <div class="card-body">
              <header>
              <app-menu/>
              </header>
              <hr/>
              <h5>HTML Tag:</h5>
              <pre class="text-center">
              <code class="language-html" data-lang="html">
                <span class="nt">&lt;app-menu/&gt;</span>
              </code>
            </pre>

              <h5>Descripton</h5>
              <p>This component is providing the app navigation. It can change itself to a hamburger menu when the width of the page is smaller than a given property.</p>
              <h5>Supported properties</h5>

              <code>itemRenderer</code> - another web component that can render each menu item. This component is responsible for rendering children (nested menu items).
              <hr/>
              <code>menuItems</code> - menu items datasource. It should be an array if <code>MenuItem[]</code>. If it is not provided, it the component will emit an event (<code>needMenuItems</code>) in order to get the menu items.
              <hr/>
              <code>hamburgerMaxWidth</code> - this property is intended to be added when you want to change the default value of <i>600px</i> for switching between normal and hamburger menu.
              <hr/>


              <div class="alert alert-primary" role="alert">
                <span class="icon fa fa-info mr-2"></span>Please not that the <b>left navigation</b> was build using <b>&lt;app-menu/&gt;</b> component and a custom itemRenderer. (Eg.<code> &lt;app-menu item-renderer="sidebar-renderer" hamburgerMaxWidth = &#123;appMaxWidth&#125;/&gt;</code>)
              </div>
            </div>
          </div>

        </div>
      </div>

    )
  }
}