import { InvoiceItem, InvoiceItemDate, InvoiceItemTitle, InvoiceItemUser } from "@/components/invoice-item/InvoiceItem";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { PlusCircle, Siren } from "lucide-react";

function DataEntries() {
  return ( 
    <>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Data Entries page.</h1>
        <Button>
          Add entry
          <PlusCircle className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <Alert>
        <Siren className="h-4 w-4" />
        <AlertTitle className="font-bold">Notice on the recent invoice uploaded.</AlertTitle>
        <AlertDescription>
          You have uploaded a file where extracted data has not been placed properly. Please see <a href="#" className="text-sky-500 underline">this guide</a> on how to solve this issue.
        </AlertDescription>
      </Alert>

      <div className="mt-10">
        <InvoiceItem>
          <InvoiceItemTitle>INV-4029512 - Bank Statement June 2023</InvoiceItemTitle>
          <InvoiceItemDate>March 01, 2024</InvoiceItemDate>
          <InvoiceItemUser>By John S. Smith</InvoiceItemUser>
        </InvoiceItem>
      </div>
    </>
  )
}

export default DataEntries;