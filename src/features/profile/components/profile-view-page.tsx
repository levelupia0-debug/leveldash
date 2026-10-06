'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProfileViewPage() {
  return (
    <div className='flex w-full flex-col p-4'>
      <Card>
        <CardHeader>
          <CardTitle>Admin Profile</CardTitle>
          <CardDescription>User account settings and preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div>
              <div className='text-sm font-medium'>Username</div>
              <div className='text-sm text-muted-foreground'>admin</div>
            </div>
            <div>
              <div className='text-sm font-medium'>Role</div>
              <div className='text-sm text-muted-foreground'>Administrator</div>
            </div>
            <div>
              <div className='text-sm font-medium'>Email</div>
              <div className='text-sm text-muted-foreground'>admin@example.com</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
