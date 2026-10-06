'use client';

import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';

export default function ExclusivePage() {
  return (
    <PageContainer>
      <div className='space-y-6'>
        <div>
          <h1 className='flex items-center gap-2 text-3xl font-bold tracking-tight'>
            <Icons.badgeCheck className='h-7 w-7 text-green-600' />
            Exclusive Area
          </h1>
          <p className='text-muted-foreground'>
            Welcome to the Pro plan features and exclusive resources.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Exclusive Pro Features</CardTitle>
            <CardDescription>
              All premium capabilities are active for your workspace.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='text-lg'>Everything is unlocked and ready for use.</div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
