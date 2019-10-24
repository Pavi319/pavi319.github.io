import { Component, h } from "@stencil/core";

@Component({
    tag: 'page-not-found-usage',
    styleUrl: '../general-css/general-css.css',
    shadow: true,
})
export class NotFoundUsage {
    render() {
        return (
            <psk-page title="psk-page-not-found"
                tableOfContentTitle="Page not found - Table Of Content">
                <psk-tag>
                    <psk-page-not-found />
                </psk-tag>

                <psk-description>
                    <p>This component is intended to be used inside a router component, so when the user navigates to an unknown route, this component will be loaded.</p>
                    <p>This component should be instantiated everywhere in application where there is a possibility to navigate to a wrong or unknown route.</p>
                    <p>The component has the role to redirect the user to a valid route inside the application by using <code>basePath</code> or <code>urlDestination</code> properties.</p>
                    <p>If none of these two properties are given, then a third property is checked: <code>pageRenderer</code></p>
                    <p>The the order of the properties priority is the following:</p>
                    <p>
                        <ul>
                            <li><code>basePath</code></li>
                            <li><code>urlDestination</code> - if basePath is not given, this property will be used</li>
                            <li><code>pageRenderer</code> - if urlDestination is not given, pageRenderer will be used</li>
                        </ul>
                    </p>
                </psk-description>

                <psk-chapter title="Supported properties">
                    <psk-page-not-found data-define-props={true} />
                </psk-chapter>

                <psk-chapter title="HTML Children">
                    <p>This component has no HTML children.</p>
                </psk-chapter>

                <psk-chapter title="Code Examples">
                    <span class="nt">&lt;psk-page-not-found basePath=&#123;"/"&#125; /&gt;</span><br />
                    <span class="nt">&lt;psk-page-not-found urlDestination=&#123;"/path/to/destination"&#125; /&gt;</span><br />
                    <span class="nt">&lt;psk-page-not-found pageRenderer=&#123;"some-custom-renderer"&#125; /&gt;</span><br />
                    <span class="nt">&lt;psk-page-not-found /&gt;</span>
                </psk-chapter>


                <psk-example title="Usage Preview with the default pageRenderer">
                    <psk-page-not-found />
                </psk-example>
            </psk-page>
        );
    }
}