import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  List,
  Plus,
  Check,
  BookAlert,
  SquarePen,
  Trash,
  ListCheck,
  Sigma,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Home = () => {
  return (
    <main className="bg-gray-200 w-full h-screen justify-center items-center flex">
      <Card className="w-lg">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />
          <Button variant="default" className="cursor-pointer">
            <Plus /> Cadastrar
          </Button>
        </CardHeader>

        <CardContent>
          <Separator className="mb-4" />

          <div className="gap-2 flex">
            <Badge className="cursor-pointer" variant="default">
              <List /> Todas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <BookAlert /> Nao finalizadas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <Check /> Concluidas
            </Badge>
          </div>

          <div className="mt-4 border-b">
            <div className=" h-14 flex justify-between items-center border-b border-t">
              <div className="w-2 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <SquarePen size={16} className="cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar tarefa</DialogTitle>
                    </DialogHeader>

                    <div className="flex gap-2 items-center">
                      <Input placeholder="Digite aqui" />
                      <Button>Editar</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Trash size={16} className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListCheck size={18} />
              <p className="text-xs">Tarefas concluidas 3/3</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  className="text-xs h-7 cursor-pointer"
                  variant="outline"
                >
                  <Trash /> Limpar Tarefas
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Deseja realmente excluir?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta ação não poderá ser desfeita. Isto acarretara na
                    exclusao permanente dos nosso servidores
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Sim</AlertDialogAction>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="h-2 bg-gray-200 w-full mt-4">
            <div
              className="h-full  bg-blue-500 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>
          <div className="flex justify-end items-center gap-2">
            <Sigma size={18} />
            <p>3 tarefas no total</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
export default Home;
