'use client';
import {RootProvider} from 'fumadocs-ui/provider';
// your custom dialog
import SearchDialog from '@/components/search';
import type {ReactNode} from 'react';
import {Banner} from "fumadocs-ui/components/banner";
import Link from "next/link";

export function Provider({children}: { children: ReactNode }) {
    return (
        <>
            <Banner variant="rainbow" id="migrate-to-pedro-1.1.0">
                Pedro Pathing 1.1.0 has released! If you haven't already,&nbsp;
                <span className="prose">
                    <Link className="link prose" href="/docs/pedro/migrating">
                        migrate now
                    </Link>
                </span>.
            </Banner>
            <RootProvider search={{SearchDialog}}>{children}</RootProvider>
        </>
    )

}