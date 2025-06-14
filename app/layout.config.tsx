import type {BaseLayoutProps} from 'fumadocs-ui/layouts/shared';
import {GithubInfo} from "fumadocs-ui/components/github-info";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <>
                <img className="size-10 dark:hidden" src="/logo-light.png" alt="Pedro Pathing Logo"/>
                <img className="size-10 hidden dark:inline" src="/logo.png" alt="Pedro Pathing Logo"/>

                <span>Pedro Pathing</span>
            </>
        ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
        {
            type: 'custom',
            children: (
                <GithubInfo owner="Pedro-Pathing" repo="PedroPathing" className="lg:-mx-2"/>
            ),
        },
    ],
};
