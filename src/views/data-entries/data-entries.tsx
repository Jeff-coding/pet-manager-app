import { InvoiceItem, InvoiceItemDate, InvoiceItemDetails, InvoiceItemIcon, InvoiceItemTitle, InvoiceItemUser } from "@/components/invoice-item/InvoiceItem";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { FileText, PlusCircle, Search, Siren } from "lucide-react";
import Data from './data-entries.json'
import { DataEntriesModel } from "./data-entries-model";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function DataEntries() {

  const data: DataEntriesModel[] = Data;
  return ( 
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Data Entries</h1>
        <Button>
          Add entry
          <PlusCircle className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <Alert>
        <Siren className="h-4 w-4" />
        <AlertTitle className="font-semibold">Notice on the recent invoice uploaded.</AlertTitle>
        <AlertDescription>
          You have uploaded a file where extracted data has not been placed properly.
          Please see <a href="#" className="text-sky-500 underline">this guide</a> on how to solve this issue.
        </AlertDescription>
      </Alert>
      
      <div className="mt-10">
        <div className="flex items-center">
          <div className="relative flex w-full max-w-xs items-center mb-5">
            <Search size={16} strokeWidth={3} className="absolute text-slate-400 top-3 start-3" />
            <Input type="email" placeholder="Search an invoice..." className="pl-10" />
          </div>
          <div className="ml-auto">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select filter type.." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Filter by date</SelectItem>
                <SelectItem value="dark">Filter by ID</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {
          data.map((item: DataEntriesModel, index: number) => (
            <InvoiceItem key={index}>
              <InvoiceItemIcon>
                <FileText className="w-12 h-12 text-sky-500" strokeWidth={1} />
              </InvoiceItemIcon>
              <InvoiceItemTitle>{item.invoiceId} - {item.invoiceName}</InvoiceItemTitle>
              <InvoiceItemDetails>
                <InvoiceItemDate>{new Date(item.date).toISOString().slice(0, 10)}</InvoiceItemDate>
                <InvoiceItemUser>{item.acctName}</InvoiceItemUser>
              </InvoiceItemDetails>
            </InvoiceItem>
          ))
        }
      </div>
    </>
  )
}

export default DataEntries;