'use client';

import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { billingInfoContent } from '@/config/infoconfig';

export default function BillingPage() {
  return (
    <PageContainer
      pageTitle='Billing & Plans'
      pageDescription='Manage your subscription and usage limits'
      infoContent={billingInfoContent}
    >
      <Card>
        <CardHeader>
          <CardTitle>Current Plan: Pro</CardTitle>
          <CardDescription>All features and tools unlocked</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-sm text-muted-foreground'>
            Your subscription is active with unlimited access to dashboard modules.
          </p>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
