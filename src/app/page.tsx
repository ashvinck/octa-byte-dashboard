import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen w-full'>
      <Card className='w-full max-w-sm text-center'>
        <CardHeader>
          <CardTitle>Octa Dashboard</CardTitle>
          <CardDescription>
            Welcome to your personal Financial Dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src='/8432.webp'
            height='200'
            width='200'
            alt='dashboard'
            className='h-full w-full'
          />
        </CardContent>
        <CardFooter className='flex items-center justify-center'>
          <Button asChild>
            <Link href='/dashboard'>Go to Dashboard</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
