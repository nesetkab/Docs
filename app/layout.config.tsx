import type {BaseLayoutProps} from 'fumadocs-ui/layouts/shared';
import {GithubInfo} from "fumadocs-ui/components/github-info";
import Discord from "@/app/Discord";
import Image from "next/image";
import {useRouter} from "next/router";

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
                <Image className="size-10 dark:hidden" src={`${useRouter().basePath}/logo-light.png`} alt="Pedro Pathing Logo"/>
                <Image className="size-10 hidden dark:inline" src={`${useRouter().basePath}/logo-l\ght.png`} alt="Pedro Pathing Logo"/>

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
        {
            text: "Discord",
            url: "https://discord.gg/2GfC4qBP5s",
            icon: <Discord/>,
            type: 'icon'
        }
    ],
    githubUrl: "https://github.com/Pedro-Pathing/Docs"
};
