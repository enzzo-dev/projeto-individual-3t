using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjetoInicial.webApi.Domains;
using ProjetoInicial.webApi.Interfaces;
using ProjetoInicial.webApi.Contexts;

namespace ProjetoInicial.webApi.Repositories
{
    public class SalasEquipamentoRepository : ISalasEquipamento
    {

        primeiroProjetoContext ctx = new primeiroProjetoContext();

        public void Atualizar(int id, SalasEquipamento salaEquipamentoAtualizada)
        {
            SalasEquipamento salaEquipamentoBuscado = ctx.SalasEquipamentos.Find(id);

            if(salaEquipamentoBuscado.IdSala != 0 || salaEquipamentoBuscado.IdEquipamento != 0)
            {
                salaEquipamentoBuscado.IdSala = salaEquipamentoAtualizada.IdSala;
                salaEquipamentoBuscado.IdEquipamento = salaEquipamentoAtualizada.IdEquipamento;
            }

            ctx.SalasEquipamentos.Update(salaEquipamentoBuscado);

            ctx.SaveChanges();
        }

        public void Cadastrar(SalasEquipamento novaSalaEquipamento)
        {
            ctx.SalasEquipamentos.Add(novaSalaEquipamento);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            SalasEquipamento salasEquipamentoBuscado = ctx.SalasEquipamentos.Find(id);

            if(salasEquipamentoBuscado != null)
            {
                ctx.SalasEquipamentos.Remove(salasEquipamentoBuscado);

                ctx.SaveChanges();
            }

            
        }

        public List<SalasEquipamento> ListarTodos()
        {
           return ctx.SalasEquipamentos.ToList();
        }
    }
}
