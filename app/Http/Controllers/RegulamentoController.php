<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RegulamentoController extends Controller
{
    public function index() {
        $texto = '<p><strong>1.</strong> Esta Pol&iacute;tica de Privacidade se refere aos dados pessoas que o(a)&nbsp; Casa brasIleira&nbsp; poder&aacute; obter quando seus Usu&aacute;rios utilizam dos servi&ccedil;os prestados durante a navega&ccedil;&atilde;o dentro de nosso ambiente virtual. Nesta Pol&iacute;tica de Privacidade, ser&aacute; descrita de que forma ser&atilde;o coletados e armazenados dados a respeito dos Usu&aacute;rios, assim como a forma pela qual tais dados poder&atilde;o ser utilizados e armazenados nos termos da Lei 12.965/2014 (&ldquo;Marco Civil da Internet&rdquo;), do Decreto 8.771 /2016 e da Lei n.&ordm; 13.709/2018 (Lei Geral de Prote&ccedil;&atilde;o de Dados).</p>

        <p>Ao aceitar a presente Pol&iacute;tica de Privacidade &eacute; declarado que todo seu conte&uacute;do foi devidamente lido e aceito, tendo assim todas as cl&aacute;usulas devidamente validadas pelo Usu&aacute;rio para que atuem em pleno vigor.</p>

        <p>Ademais, deixa claro que esta Pol&iacute;tica de Privacidade poder&aacute; ser atualizada a qualquer tempo, a exclusivo crit&eacute;rio dos administradores do ambiente virtual aqui discutido. Por&eacute;m, deixa claro que toda e qualquer comunica&ccedil;&atilde;o ser&aacute; devidamente comunicada aos Usu&aacute;rios para nova aceita&ccedil;&atilde;o de modo de que, caso continuem em utilizar os servi&ccedil;os providenciados, estar&atilde;o automaticamente concordando com as altera&ccedil;&otilde;es realizadas no corpo desta pol&iacute;tica.</p>

        <p>&nbsp;</p>

        <p><strong>Obten&ccedil;&atilde;o, Armazenamento e Cuidado dos dados pessoais coletados.</strong></p>

        <p><strong>2.</strong> Aceitando nossa pol&iacute;tica de Privacidade, fica concedido, por livre e espont&acirc;nea vontade, permiss&atilde;o para a coletae armazenamento dos dados pessoas dos Usu&aacute;rios, que ser&atilde;o tratados da forma abaixo descrita:</p>

        <ul>
        <li>Poder&atilde;o ser coletados informa&ccedil;&otilde;es fornecidas no cadastro ao longo do uso dos Servi&ccedil;os e durante a sua navega&ccedil;&atilde;o em nossa plataforma.</li>
        <li>Eventuais dados de navega&ccedil;&atilde;o ser&atilde;o utilizados para possibilitar o seu acesso e saber como entrar em contato com o Usu&aacute;rio quando for necess&aacute;rio. Al&eacute;m de utilizados para compreender seus interesses, como forma de garantir constante melhoria e evolu&ccedil;&atilde;o dos servi&ccedil;os providenciados.</li>
        <li>Os dados pessoais, poder&atilde;o ser armazenados em outros pa&iacute;ses onde o(a) Casa brasIleira&nbsp; ou suas afiliadas possuam presen&ccedil;a. Caso tais jurisdi&ccedil;&otilde;es possuam diferentes leis de prote&ccedil;&atilde;o de dados, fica estabelecido o compromisso de armazenar e cuidar dos dados de acordo com tais leis e a presente Pol&iacute;tica de Privacidade.</li>
        <li>Os Dados pessoais poder&atilde;o ser utilizados de forma an&ocirc;nima para fins estat&iacute;sticos e de controle e melhora dos nossos servi&ccedil;os.</li>
        <li>Ser&atilde;o estabelecidas medidas de seguran&ccedil;a razo&aacute;veis para proteger todos os dados pessoais providenciados. Entretanto, lembramos que n&atilde;o existe uma medida de seguran&ccedil;a 100% eficaz.</li>
        <li>Eventualmente, todos os dados coletados pelo Usu&aacute;rio durante o uso dos servi&ccedil;os prestados, poder&atilde;o ser exclu&iacute;dos ao momento em que o Usu&aacute;rio desejar, dito isso, somos obrigados a manter os registros de conex&atilde;o durante o prazo legal.</li>
        <li>Esta Pol&iacute;tica de Privacidade se aplica a todos os websites detidos pelo(a) Casa brasIleira&nbsp; ou qualquer outra p&aacute;gina, m&iacute;dia social, ferramenta, software ou conte&uacute;do de sua propriedade.</li>
        </ul>

        <p><strong>a. </strong>Informa&ccedil;&otilde;es sobre o seu computador, incluindo endere&ccedil;o IP, localiza&ccedil;&atilde;o geogr&aacute;fica, tipo e vers&atilde;o do navegador e sistema operacional.</p>

        <p>Informa&ccedil;&otilde;es sobre suas visitas e uso deste site, incluindo fonte de refer&ecirc;ncia, dura&ccedil;&atilde;o da visita, visualiza&ccedil;&otilde;es de p&aacute;gina e caminhos de navega&ccedil;&atilde;o no site.</p>

        <p>Informa&ccedil;&otilde;es como seu endere&ccedil;o de e-mail, que voc&ecirc; fornece ao se registrar em nosso site.</p>

        <p>Informa&ccedil;&otilde;es que voc&ecirc; insere ao criar um perfil em nosso site &ndash; por exemplo, nome, fotos de perfil, sexo, data de nascimento, status de relacionamento, interesses e hobbies, informa&ccedil;&otilde;es educacionais e profissionais.</p>

        <p>Informa&ccedil;&otilde;es como nome e endere&ccedil;o de e-mail, que voc&ecirc; insere para configurar assinaturas de nossos e-mails e/ou newsletters.</p>

        <p>Informa&ccedil;&otilde;es que voc&ecirc; insere durante o uso dos servi&ccedil;os em nosso site.</p>

        <p>Informa&ccedil;&otilde;es geradas ao utilizar nosso site, incluindo quando, com que frequ&ecirc;ncia e em que local voc&ecirc; acessa.</p>

        <p>Informa&ccedil;&otilde;es que voc&ecirc; publica em nosso site com a inten&ccedil;&atilde;o de disponibiliz&aacute;-las na internet, incluindo nome de usu&aacute;rio, fotos de perfil e o conte&uacute;do de suas publica&ccedil;&otilde;es.</p>

        <p>Informa&ccedil;&otilde;es contidas em qualquer comunica&ccedil;&atilde;o que voc&ecirc; nos envia por e-mail ou atrav&eacute;s de nosso site, incluindo o conte&uacute;do e os metadados da comunica&ccedil;&atilde;o.</p>

        <p>Qualquer outra informa&ccedil;&atilde;o pessoal que voc&ecirc; nos enviar.</p>

        <p><strong>3.</strong> O fato de usar o site e / ou servi&ccedil;o disponibilizado confirma o consentimento inequ&iacute;voco e incondicional do Usu&aacute;rio com esta Pol&iacute;tica, incluindo os termos de processamento de seus dados pessoais. Na aus&ecirc;ncia de consentimento do usu&aacute;rio com esta pol&iacute;tica e os termos de processamento de seus dados pessoais, o Usu&aacute;rio deve parar de usar o site e / ou o servi&ccedil;o provid&ecirc;nciados, reservando &agrave; administra&ccedil;&atilde;o o direito de impedir o acesso do referido Usu&aacute;rio.</p>

        <p><strong>4.</strong> Este ambiente &eacute; destinado a usu&aacute;rios com 18 (dezoito) anos de idade ou mais. <strong>Se voc&ecirc; tem menos de 18 (dezoito) anos, n&atilde;o poder&aacute; usar ou registrar-se para usar este site ou seus servi&ccedil;os sem a permiss&atilde;o ou consentimento dos pais.</strong> Ao concordar com esta pol&iacute;tica de Privacidade, voc&ecirc; tem a capacidade legal necess&aacute;ria para cumprir e ficar vinculado por esta pol&iacute;tica de Privacidade.</p>

        <p>&nbsp;</p>

        <p><strong>Armazenamento de Informa&ccedil;&otilde;es</strong></p>

        <p><strong>5.</strong>&nbsp;&Eacute; reconhecida a natureza sens&iacute;vel e confidencial dos dados e demais informa&ccedil;&otilde;es obtidas e armazenadas. Assim fica estabelecido o compromisso de manter estas informa&ccedil;&otilde;es de natureza confidencial em sigilo, sem utiliz&aacute;-las ou divulg&aacute;-las sem a autoriza&ccedil;&atilde;o do Usu&aacute;rio, exceto nos termos previstos nos Termos de Uso e na Pol&iacute;tica de Privacidade, bem como nos limites necess&aacute;rios para a execu&ccedil;&atilde;o das obriga&ccedil;&otilde;es contratuais e legais, assim como para a defesa dos interesses do(a) Casa brasIleira&nbsp; e dos Usu&aacute;rios.</p>

        <p>&nbsp;</p>

        <p><strong>Cuidado com as informa&ccedil;&otilde;ese uso de Cookies</strong></p>

        <p><strong>6.</strong> O Usu&aacute;rio concorda que o(a) Casa brasIleira&nbsp; poder&aacute; coletar, registrar, organizar, acumular, armazenar, atualizar, extrair, usar, transferir, incluindo transfer&ecirc;ncia para outros pa&iacute;ses onde possua parceiros e/ou afiliadas, remover e destruir dados pessoais e outras informa&ccedil;&otilde;es.</p>

        <p><strong>7.</strong> Os atos descritos acima poder&atilde;o ser processados de forma manual e/ou com o uso de automa&ccedil;&atilde;o. O presenteconsentimento &eacute; v&aacute;lido at&eacute; a sua retirada das configura&ccedil;&otilde;es do Usu&aacute;rio e/ou at&eacute; que seja solicitado pelo Usu&aacute;rio de forma direta. A solicita&ccedil;&atilde;o pode ser enviada por escrito para o endere&ccedil;o eletr&ocirc;nico: contato@exewplo.com.br</p>

        <p><strong>8.</strong> Dentro dos limites da legisla&ccedil;&atilde;o aplic&aacute;vel, o(a) Casa brasIleira&nbsp; tem o direito de transferir as informa&ccedil;&otilde;es fornecidas pelo Usu&aacute;rio para terceiros.</p>

        <p><strong>9.</strong> No tratamento de dados pessoais, ser&atilde;o tomadas as medidas legais, t&eacute;cnicas e organizacionais necess&aacute;rias para protegeros dados pessoais contra o acesso n&atilde;o autorizado ou acidental, destrui&ccedil;&atilde;o, modifica&ccedil;&atilde;o, bloqueio, c&oacute;pia, disposi&ccedil;&atilde;o, distribui&ccedil;&atilde;o de dados pessoais, bem como outras a&ccedil;&otilde;es ilegais em rela&ccedil;&atilde;o a dados pessoais em cumprimento dos requisitos da legisla&ccedil;&atilde;o brasileira e/ou qualquer outra que venha a ser aplic&aacute;vel. O Usu&aacute;rio concorda que algumas das informa&ccedil;&otilde;es, incluindo dados pessoais, ficam dispon&iacute;veis publicamente ao usar determinados servi&ccedil;os e / ou o site.</p>

        <p><strong>10.</strong> Casa brasIleira&nbsp; faz uso de cookies. Ao acessar nosso site, voc&ecirc; concorda em usar cookies nos termos da nossa Pol&iacute;tica de Cookies. Salienta-se que algum dos nossos parceiros de site podem usar cookies.</p>

        <p>&nbsp;</p>

        <p><strong>Manuten&ccedil;&atilde;o dos dados pelo Usu&aacute;rio</strong></p>

        <p><strong>11.</strong> O usu&aacute;rio tem o direito de requerer a exclus&atilde;o de seus dados pessoais coletados durante o uso do ambiente eletr&ocirc;nico disponibilizado a qualquer momento, utilizando-se servi&ccedil;o relevante disponibilizado pelo pr&oacute;prio ambiente, ou por meio de contato direto com a administra&ccedil;&atilde;o por meio do endere&ccedil;o eletr&ocirc;nico disponibilizado acima. Estes direitos podem ser restringidos da maneira prescrita pela legisla&ccedil;&atilde;o brasileira.</p>

        <p><strong>12.</strong> Caso o Usu&aacute;rio tenha ci&ecirc;ncia de que seus dados pessoas tenham sido comprometidos, de forma que poder&aacute; afetar seu acesso ao ambiente eletr&ocirc;nico provid&ecirc;nciado, ele dever&aacute; comunicar imediatamente a administra&ccedil;&atilde;o para que sejam tomadas todas a medidas de seguran&ccedil;a necess&aacute;rias.</p>

        <p><strong>13.</strong> O Usu&aacute;rio &eacute; o &uacute;nico respons&aacute;vel por suas a&ccedil;&otilde;es relacionadas ao uso do site e / ou servi&ccedil;os disponibilizados, significando que, se tais a&ccedil;&otilde;es resultarem em viola&ccedil;&atilde;o dos direitos e interesses leg&iacute;timos de terceiros, bem como descumpre com a legisla&ccedil;&atilde;o do Brasil, o Usu&aacute;rio concorda em indenizar os preju&iacute;zos causados ao(&agrave;) Casa brasIleira&nbsp; e / ou terceiros como resultado da n&atilde;o execu&ccedil;&atilde;o ou m&aacute; execu&ccedil;&atilde;o das obriga&ccedil;&otilde;es do Usu&aacute;rio sob esta Pol&iacute;tica e / ou a legisla&ccedil;&atilde;o.</p>

        <p>&nbsp;</p>

        <p><strong>Responsabilidades e Compet&ecirc;ncias</strong></p>

        <p><strong>14.</strong> O Usu&aacute;rio usa os Servi&ccedil;os por sua conta e risco, sendo o &uacute;nico respons&aacute;vel por perdas incorridas como resultado do mal-uso pelo do ambiente e / ou dos servi&ccedil;os da Empresa.</p>

        <p><strong>15.</strong> O(A) Casa brasIleira&nbsp; coopera com as autoridades competentes e com terceiros para garantir o cumprimento das leis, salvaguardar a integridade e a seguran&ccedil;a da Plataforma e de seus usu&aacute;rios, e impedir condutas que prejudiquem a integridade moral e a honra das pessoas f&iacute;sicas ou jur&iacute;dicas envolvidas.</p>

        <p><strong>16.</strong> As disposi&ccedil;&otilde;es desta Pol&iacute;tica s&atilde;o regidas pelas leis do Brasil. Se, por uma raz&atilde;o ou outra, uma ou mais disposi&ccedil;&otilde;es desta Pol&iacute;tica forem consideradas inv&aacute;lidas, isso n&atilde;o afeta as demais disposi&ccedil;&otilde;es.</p>

        <p><strong>17.</strong> Para todas as quest&otilde;es o Usu&aacute;rio pode enviar um pedido para o endere&ccedil;o da empresa para a seguinte conta: contato@exewplo.com.br</p>
        ';

        $texto = '<p>Em breve</p>';

        return Inertia::render('Regulamento', [
            'texto' => $texto
        ]);
    }
};